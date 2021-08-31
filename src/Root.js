import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getListMusicAPI} from './apis/getListMusicAPI';
import ControllerMusic from './components/ControllerMusic';
import HeaderMusic from './components/HeaderMusic';
import ListingMusic from './components/ListingMusic';
import SearchMusic from './components/SearchMusic';
import {Colors, Layout} from './styles';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const Root = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [track, setTrack] = useState([]);

  const [activeTrack, setActiveTrack] = useState({
    title: '',
    artist: '',
    index: 0,
  });

  useEffect(() => {
    //function a

    return () => TrackPlayer.destroy();
  }, []);

  useTrackPlayerEvents(
    [
      Event.PlaybackQueueEnded,
      Event.PlaybackTrackChanged,
      Event.RemotePlay,
      Event.RemotePause,
    ],
    async event => {
      if (
        event.type === Event.PlaybackTrackChanged &&
        event.nextTrack !== undefined
      ) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const {title, artist, id} = track || {};

        setActiveTrack({
          ...activeTrack,
          title: title,
          artist: artist,
          index: id,
        });
      } else if (event.type === Event.RemotePause) {
        TrackPlayer.pause();
      } else if (event.type === Event.RemotePlay) {
        TrackPlayer.play();
      } else if (event.type === Event.PlaybackQueueEnded) {
        console.log('Event.PlaybackQueueEnded fired.');
        if (track.length > 0) {
          await TrackPlayer.add(track);
        }
      }
    },
  );

  const getMusic = async query => {
    setLoading(true);
    try {
      let musics = await getListMusicAPI(query);
      //console.log(JSON.stringify(musics[0]));
      setData(musics);
      setLoading(false);

      TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.reset();
      });

      let trackList = [];
      musics.forEach((music, index) => {
        trackList.push({
          id: index,
          title: music.title,
          url: music.preview,
          artist: music.artist.name,
        });
      });

      setTrack(trackList);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onPlay = () => {
    console.log('play');
    TrackPlayer.play();
  };
  const onPause = () => {
    console.log('pause');
    TrackPlayer.pause();
  };
  const onPrev = () => {
    console.log('prev');
    TrackPlayer.skipToPrevious();
  };
  const onNext = () => {
    console.log('next');
    TrackPlayer.skipToNext();
  };

  const skipToSong = async index => {
    console.log(index + 'nilai index');
    await TrackPlayer.skip(index);
  };

  return (
    <View
      style={[
        Layout.Layout.container,
        {backgroundColor: Colors.mainColor, padding: 20},
      ]}>
      <HeaderMusic
        title={activeTrack.title}
        artist={activeTrack.artist}
        position={progress.position}
        duration={progress.duration}
      />
      <ControllerMusic
        onPlay={onPlay}
        onNext={onNext}
        onPrev={onPrev}
        onPause={onPause}
      />
      <SearchMusic getMusic={getMusic} />
      <ListingMusic
        musicData={data}
        isLoading={loading}
        activeIndex={activeTrack.index}
      />
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({});

import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from '../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../redux/slices/albumSlice';
import { Link } from 'react-router-dom';

const headers = [
  {
    title: 'AlbumId',
    value: 'id',
  },
  {
    title: 'Title',
    value: 'title',
  },
  {
    title: 'Photos',
    value: 'id',
    render: (row) => <Link to={`photos/${row.id}`}>Photos </Link>,
  },
];

const renderBackButton = () => (
  <Link to={'/'}>
    <button>Users</button>
  </Link>
);

export const Albums = ({}) => {
  const albums = useSelector((state) => state.albums.albumsArray);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [userId]);

  return <Table data={albums} headers={headers} footer={renderBackButton} />;
};

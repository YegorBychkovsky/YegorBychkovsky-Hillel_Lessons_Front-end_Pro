import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from '../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/slices/photosSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

const headers = [
  {
    title: 'ID',
    value: 'id',
  },
  {
    title: 'Title',
    value: 'title',
  },
  {
    title: 'Url',
    value: 'url',
  },
];

const renderBackButton = () => (
  <Link to={'/'}>
    <button>Users</button>
  </Link>
);

export const Photos = ({}) => {
  const photos = useSelector((state) => state.photos.photosArray);
  const dispatch = useDispatch();
  const { albumId } = useParams();
  useEffect(() => {
    dispatch(fetchPhotos(albumId));
  }, [albumId]);

  return <Table data={photos} headers={headers} footer={renderBackButton} />;
};

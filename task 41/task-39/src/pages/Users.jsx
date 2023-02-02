import { React, useEffect } from 'react';
import { Table } from '../components/Table';
import { fetchUsers } from '../redux/slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const headers = [
  {
    id: 1,
    title: 'ID',
    value: 'id',
  },
  {
    id: 2,
    title: 'Name',
    value: 'name',
  },
  {
    id: 3,
    title: 'Albums',
    value: 'id',
    render: (row) => <Link to={`albums/${row.id}`}>Albums </Link>,
  },
];

const renderBackButton = () => (
  <Link to={'/'}>
    <button>Users</button>
  </Link>
);

export const Users = ({}) => {
  const users = useSelector((state) => state.users.usersArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <Table data={users} headers={headers} footer={renderBackButton} />;
};

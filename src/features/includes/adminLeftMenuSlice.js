// features/sidebarMenu/sidebarMenuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'icon-material-outline-dashboard',
      allowed: ['user', 'employer', 'admin'],
    },
    {
      label: 'Manage Jobs Post',
      path: '/jobs-post',
      icon: 'icon-line-awesome-user-secret',
      allowed: ['employer'],
    },
    {
      label: 'Manage Resume',
      path: '/manage-resume',
      icon: 'icon-material-outline-supervisor-account',
      allowed: ['user'],
    },
    {
      label: 'Bookmarks Jobs',
      path: '/bookmarks',
      icon: 'icon-feather-heart',
      allowed: ['user'],
    },
    {
      label: 'Freelancer Tasks',
      icon: 'icon-line-awesome-file-text',
      allowed: ['user'],
      children: [
        { label: 'Manage Tasks', path: '/freelancer-manage-tasks-list' },
        { label: 'Manage Bidders', path: '/manage-bidders-list' },
        { label: 'Active Bids', path: '/freelancer-active-bids' },
        { label: 'Post Bids', path: '/freelancer-add-post-bids' },
      ],
    },
    {
      label: 'Reviews',
      path: '/reviews',
      icon: 'icon-material-outline-rate-review',
      allowed: ['user', 'employer'],
    },
    {
      label: 'My Profile',
      path: '/my-profile',
      icon: 'icon-feather-user',
      allowed: ['user', 'employer'],
    },
  ],
};

const sidebarMenuSlice = createSlice({
  name: 'sidebarMenu',
  initialState,
  reducers: {},
});

export default sidebarMenuSlice.reducer;

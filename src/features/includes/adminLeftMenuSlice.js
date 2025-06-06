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
      label: 'Manage Resume',
      path: '/manage-resume',
      icon: 'icon-material-outline-supervisor-account',
      allowed: ['user'],
    },
    {
      label: 'Resume headline',
      path: '/resume-headline',
      icon: 'icon-material-outline-supervisor-account',
      allowed: ['user'],
    },
    {
      label: 'Projects',
      path: '/projects',
      icon: 'icon-feather-heart',
      allowed: ['user'],
    },
    {
      label: 'Profile summary',
      path: '/profile-summary',
      icon: 'icon-line-awesome-file-text',
      allowed: ['user'],
    },
    {
      label: 'Career profile',
      path: '/career-profile',
      icon: 'icon-material-outline-rate-review',
      allowed: ['user', 'employer'],
    },
    {
      label: 'Personal Details',
      path: '/personel-details',
      icon: 'icon-feather-user',
      allowed: ['user', 'employer'],
    },{
      label: 'Education',
      icon: 'icon-feather-user',
      allowed: ['user','employer'],
      children: [
        { label: 'Manage Tasks', path: '/freelancer-manage-tasks-list' },
        { label: 'Manage Bidders', path: '/manage-bidders-list' },
        { label: 'Active Bids', path: '/freelancer-active-bids' },
        { label: 'Post Bids', path: '/freelancer-add-post-bids' },
      ],
    },
    {
      label: 'Employment',
      path: '/employment',
      icon: 'icon-feather-user',
      allowed: ['user', 'employer'],
    },
    {
      label: 'Key Skills',
      path: '/key-skills',
      icon: 'icon-feather-user',
      allowed: ['user', 'employer'],
    },
     {
    "label": "Settings",
    "path": "/settings",
    "allowed": ["employer"]
  }
  ],
};

const sidebarMenuSlice = createSlice({
  name: 'sidebarMenu',
  initialState,
  reducers: {},
});

export default sidebarMenuSlice.reducer;

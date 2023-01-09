import { Home, Icon, Music, List } from 'react-feather/';

type MenuItems = {
	title: string;
	anchor: string;
	icon: Icon;
}[];

export const menuItems: MenuItems = [
	{ title: 'Main', anchor: '/', icon: Home },
	{ title: 'Tracks', anchor: '/tracks', icon: Music },
	{ title: 'Albums', anchor: '/albums', icon: List },
];

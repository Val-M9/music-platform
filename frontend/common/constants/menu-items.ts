import { Home, Icon, Music, List } from 'react-feather/';
import { Routes } from '../enums';

type MenuItems = {
	title: string;
	anchor: string;
	icon: Icon;
}[];

export const menuItems: MenuItems = [
	{ title: 'Main', anchor: Routes.MAIN, icon: Home },
	{ title: 'Tracks', anchor: Routes.TRACKS, icon: Music },
	{ title: 'Albums', anchor: Routes.ALBUMS, icon: List },
];

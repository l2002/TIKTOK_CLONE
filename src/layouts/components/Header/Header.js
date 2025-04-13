import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightFromBracket,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Menu from '~/components/Poper/Menu';

import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and Shorcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Getcoin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logouut',
        separate: true,
    },
];
function Header() {
    const curentUSer = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <div className={cx('logo')}>
                        <svg height="42" width="118" alt="TikTok">
                            <path
                                fill="#25F4EE"
                                d="M9.875 16.842v-1.119A9 9 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707"
                            ></path>
                            <path
                                fill="#25F4EE"
                                d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a7 7 0 0 1-.11-1.202h-4.726l-.006 18.969a3.98 3.98 0 0 1-3.967 3.829 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36v-1.055a6.5 6.5 0 0 1-3.583-1.068 6.57 6.57 0 0 0 3.583 2.123"
                            ></path>
                            <path
                                fill="#FE2C55"
                                d="M20.409 11.044a6.54 6.54 0 0 1-1.616-4.316h-1.265a6.56 6.56 0 0 0 2.88 4.316M8.706 20.365a3.98 3.98 0 0 0-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.409 0 .805.07 1.175.185v-4.833a9 9 0 0 0-1.175-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.176-.185"
                            ></path>
                            <path
                                fill="#FE2C55"
                                d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.622c0 4.8-3.902 8.713-8.706 8.713a8.67 8.67 0 0 1-4.988-1.579 8.7 8.7 0 0 0 6.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.72-.002-1.38-.148"
                            ></path>
                            <path
                                fill="black"
                                d="M17.413 24.348v-9.622a11.25 11.25 0 0 0 6.58 2.116v-3.676a6.57 6.57 0 0 1-3.584-2.123 6.6 6.6 0 0 1-2.888-4.315H14.06l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83A3.99 3.99 0 0 1 6.86 27.87a3.99 3.99 0 0 1-2.133-3.523A3.98 3.98 0 0 1 8.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.988 1.58c4.798 0 8.707-3.913 8.707-8.714m12.635-11.17h14.775l-1.355 4.232h-3.832v15.644h-4.778V17.41l-4.804.006zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006zM45.73 19.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.397 4.826a2.384 2.384 0 0 0 2.382-2.384 2.384 2.384 0 1 0-2.382 2.384"
                            ></path>
                            <path
                                fill="#25F4EE"
                                d="M83.545 24.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"
                            ></path>
                            <path
                                fill="#FE2C55"
                                d="M92.858 16.83c-.217 0-.505.012-.716.025a8.11 8.11 0 0 1 7.468 8.087 8.11 8.11 0 0 1-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"
                            ></path>
                            <path
                                fill="black"
                                d="M91.58 28.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.942 3.945m0-12.058c-4.477 0-8.106 3.631-8.106 8.113s3.629 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.628-8.113-8.106-8.113"
                            ></path>
                        </svg>
                    </div>
                </Link>

                {/* Search */}

                <Search />

                <div className={cx('actions')}>
                    {curentUSer ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    {/* <span className={cx('badge')}>12</span> */}
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={curentUSer ? userMenu : MENU_ITEMS}>
                        {curentUSer ? (
                            <Image
                                className={cx('user-avt')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/bd4f3ef229c98f8ddce4d74e13919fac~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ee1490ba&x-expires=1743487200&x-signature=y%2FSzHbGXjWHxluAivms%2BOaFwm9o%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                                alt="Nguyen Minh Luan"
                            />
                        ) : (
                            <button className={cx('more-action')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

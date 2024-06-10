import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CheatSidebar = () => {
    const [ toggle, setToggle ] = useState( false );
    const router = useRouter();

    const openNav = () => {
        const $wrapper = document.querySelector( '#wrapper' );
        $wrapper.classList.add( 'toggled' );
    };

    const closeNav = () => {
        const $wrapper = document.querySelector( '#wrapper' );
        $wrapper.classList.remove( 'toggled' );
    };

    const mcqsubjects = [
        { id: 1, name: 'Programming', link: '/cheatsheet/programming' },
        { id: 1, name: '⨠ Angular Js', link: '/cheatsheet/programming/angularjs' },
        { id: 2, name: '⨠ Asp.Net', link: '/cheatsheet/programming/aspnet' },
        { id: 3, name: '⨠ Bootstrap', link: '/cheatsheet/programming/bootstrap' },
        { id: 4, name: '⨠ CSS', link: '/cheatsheet/programming/css' },
        { id: 5, name: '⨠ Django', link: '/cheatsheet/programming/django' },
        { id: 6, name: '⨠ Express Js', link: '/cheatsheet/programming/express' },
        { id: 7, name: '⨠ Go Language', link: '/cheatsheet/programming/go-language' },
        { id: 2, name: 'Softwares', link: '/cheatsheet/software' },
        { id: 1, name: '⨠ Visual Studio', link: '/cheatsheet/software/visual-studio' },
        { id: 2, name: '⨠ VLC Media Player', link: '/cheatsheet/software/vlc-media' },
   
        // Add more subjects here
    ];

    useEffect( () => {
        toggle ? openNav() : closeNav();
    }, [ toggle ] );

    return (
        <div>
            <div id="wrapper">
                <aside id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li>
                            <Link href="/cheatsheet">
                                <div className={ `sidebar-link ${router.pathname === '/cheatsheet' ? 'active' : ''}` }>
                                    <i className="fa fa-home" />
                                    Cheat Sheet - Home
                                </div>
                            </Link>
                        </li>
                        { mcqsubjects.map( ( subject ) => (
                            <li key={ subject.id }>
                                <Link href={ subject.link }>
                                    <div className={ `sidebar-link ${router.pathname === subject.link ? 'active' : ''}` }>
                                        <i className="fa fa-home" />
                                        { subject.name }
                                    </div>
                                </Link>
                            </li>
                        ) ) }
                    </ul>
                </aside>
                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <div className="sidebar-toggle" onClick={ () => setToggle( !toggle ) }>
                                <i className="bi bi-list" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <style jsx>{ `
                .sidebar-nav {
                    list-style: none;
                    padding: 0;
                }
                .sidebar-link {
                    display: flex;
                    color: black;
                    text-decoration: none;
                }
                .sidebar-link.active {
                    background-color: #0000ff;
                    color: #fff;
                }
                .sidebar-link i {
                    margin-right: -50px;
                }
                .navbar-header {
                    padding: 10px 15px;
                }
                .sidebar-toggle {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default CheatSidebar;

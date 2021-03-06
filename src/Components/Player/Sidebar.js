import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useDataLayer } from "../../Data/DataLayer";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayer();
    console.log("Playlists:", playlists);

    return (
        <div className="sidebar">
            <img
                className="sidebar-logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
                />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong style={{marginRight: '60%'}} className="sidebar_title">PLAYLISTS</strong>
            <hr />

            <div className="sidebar_playlists">
                {playlists?.items?.map((playlist) => (
                    <SidebarOption key={"lists"} title={playlist.name} />
                ))}
            </div>

        </div>
    )
}

export default Sidebar;

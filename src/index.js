import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCAEX_RYiLj0JnWI5mEscAKjp9Puvo1GTU";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            videoSelected: null,
            term: null
        };
        this.videoSearch('reactjs');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                videoSelected: videos[ 0 ]
            });
        });
    };

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.videoSelected} />
                <VideoList onVideoSelected={videoSelected => this.setState({ videoSelected })}
                           videos={this.state.videos} />
            </div>
        );
    }
}

const appInstance = React.createElement(App);
// We can do like this also
// const appInstance = <app />;

ReactDOM.render(appInstance, document.querySelector(".container"));
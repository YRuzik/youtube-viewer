import {channel, comment, listItem, video} from "../interfaces/interfaces";

export const listFetched = (list: listItem[]) => {
    return {
        type: 'LIST_FETCHED',
        payload: list
    }
}

export const listFetching = () => {
    return {
        type: 'LIST_FETCHING'
    }
}

export const listFetchingError = () => {
    return {
        type: 'LIST_FETCHING_ERROR'
    }
}

export const currentVideoFetched = (currentVideo: listItem[]) => {
    return {
        type: 'CURRENT_VIDEO_FETCHED',
        payload: currentVideo
    }
}

export const currentChannelFetched = (currentChannel: channel) => {
    return {
        type: 'CURRENT_CHANNEL_FETCHED',
        payload: currentChannel
    }
}

export const currentCommentsFetched = (currentComments: comment) => {
    return {
        type: 'CURRENT_COMMENTS_FETCHED',
        payload: currentComments
    }
}

export const videoIDFetched = (videoID: string) => {
    return {
        type: 'VIDEO_ID_FETCHED',
        payload: videoID
    }
}

export const searchListFetched = (searchList: video[]) => {
    return {
        type: 'SEARCH_LIST_FETCHED',
        payload: searchList
    }
}

export const addWatchLaterVideo = (watchLaterVideo: video | video[]) => {
    return {
        type: 'ADD_WATCH_LATER_CONTENT',
        payload: watchLaterVideo
    }
}

export const removeWatchLaterVideo = (watchLaterID: string) => {
    return {
        type: 'REMOVE_ADD_WATCH_LATER_VIDEO',
        payload: watchLaterID
    }
}

export const addFavorites = (favoriteVideo: video | video[]) => {
    return {
        type: 'ADD_FAVORITES',
        payload: favoriteVideo
    }
}

export const removeFavorites = (favoritesID: string) => {
    return {
        type: 'REMOVE_FAVORITES',
        payload: favoritesID
    }
}

export const addLiked = (likedVideo: video | video[]) => {
    return {
        type: 'ADD_LIKED',
        payload: likedVideo
    }
}

export const removeLiked = (likedID: string) => {
    return {
        type: 'REMOVE_LIKED',
        payload: likedID
    }
}

export const addSubscribers = (channel: channel | channel[]) => {
    return {
        type: 'ADD_SUBSCRIBERS',
        payload: channel
    }
}

export const removeSubscribers = (channelID: string) => {
    return {
        type: 'REMOVE_SUBSCRIBERS',
        payload: channelID
    }
}

export const setToaster = (label: string, sub = false) => {
    return {
        type: 'SET_TOASTER',
        payload: {
            label,
            sub
        }
    }
}

export const videosChannelFetched = (videosChannel: video[]) => {
    return {
        type: 'VIDEOS_CHANNEL_FETCHED',
        payload: videosChannel
    }
}

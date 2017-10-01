import axios from 'axios';

import { makeApiEndpoint } from '../../services/api-endpoint';
import { makeGetPost, makeListPosts } from '../../services/post';

import { makePost } from './post';

const baseUrl = `https://jsonplaceholder.typicode.com/`;
const apiEndpoint = makeApiEndpoint({ axios, baseUrl });

const postApiEndpoint = apiEndpoint(`posts/`);
const getPost = makeGetPost({ api: postApiEndpoint });
const listPosts = makeListPosts({ api: postApiEndpoint });

export const post = makePost({ getPost, listPosts });

export default {
  post,
};

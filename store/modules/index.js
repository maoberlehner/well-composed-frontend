import axios from 'axios';

import { makeApi } from '../../utils/api';
import { makeGetPost, makeListPosts } from '../../services/post';
import apiConfig from '../../config/api';
import * as types from '../mutation-types';

import { makePost } from './post';

const { baseUrl } = apiConfig;
const apiEndpoint = makeApi({ axios, baseUrl });

const postApiEndpoint = apiEndpoint(`posts/`);
const getPost = makeGetPost({ api: postApiEndpoint });
const listPosts = makeListPosts({ api: postApiEndpoint });

export const post = makePost({ getPost, listPosts, types });

export default {
  post,
};

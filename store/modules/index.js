import axios from 'axios';

import { makeApi } from '../../utils/api';
import { makeGetPost, makeListPosts } from '../../services/post';
import apiConfig from '../../config/api';
import * as types from '../mutation-types';

import { makePost } from './post';

const { baseUrl } = apiConfig;
const api = makeApi({ axios, baseUrl });

const postApi = api(`posts/`);

const getPost = makeGetPost({ api: postApi });
const listPosts = makeListPosts({ api: postApi });

export const post = makePost({ getPost, listPosts, types });

export default {
  post,
};

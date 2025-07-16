import request from '@/utils/request';
import type { ILoginParams } from '@/types/api';

import dept from './dept';
import role from './role';
import user from './user';
import menu from './menu'

export default {
  // 登录
  login(params: ILoginParams) {
    return request.post('/users/login', params);
  },
  ...dept,
  ...role,
  ...user,
  ...menu
};
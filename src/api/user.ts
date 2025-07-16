import type { ICreateUserParams, IUpdateUserParams, IUser, IUserSearchParams, ResultData } from '@/types/api';
import request from '../utils/request';

export default {
  // 获取用户列表
  getUserList(params: IUserSearchParams) {
    return request.get<ResultData<IUser>>('/users/list', params);
  },

  // 创建用户
  createUser(params: ICreateUserParams) {
    return request.post('/users/create', params);
  },

  // 创建用户
  editUser(params: IUpdateUserParams) {
    return request.post('/users/edit', params);
  },

  // 删除和批量删除用户
  delUser(params: { userIds: number[] }) {
    return request.post('/users/delete', params);
  },

  getAllUserList() {
    return request.get<IUser[]>('/users/all/list');
  },
}
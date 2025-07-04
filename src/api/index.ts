import request from '@/utils/request';
import type { ILoginParams, IDeptSearchParams, IDept, IUser } from '@/types/api';

export default {
  // 登录
  login(params: ILoginParams) {
    return request.post('/users/login', params);
  },

  // 获取部门列表
  getDeptList(params?: IDeptSearchParams) {
    return request.get<IDept[]>('/dept/list', params);
  },

  // 添加部门
  createDept(params: IDept) {
    return request.post('/dept/create', params);
  },
  // 修改部门
  updateDept(params: IDept) {
    return request.post('/dept/edit', params);
  },
  // 删除部门
  deleteDept(params: { _id: string }) {
    return request.post('/dept/delete', params);
  },
  // 获取用户
  getUserList() {
    return request.get('/users/list');
  },
  getAllUserList() {
    return request.get<IUser[]>('/users/all/list');
  },
  // 获取角色
  getRoleList() {
    return request.get('/roles/list');
  },
};
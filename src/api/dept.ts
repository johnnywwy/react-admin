import request from '@/utils/request';
import type { IDeptSearchParams, IDept } from '@/types/api';

export default {
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
}
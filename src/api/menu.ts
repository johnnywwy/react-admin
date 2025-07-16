import request from '@/utils/request';
import type { ICreateMenuParams, IUpdateMenuParams, ISearchParams, IMenu } from '@/types/api';

export default {
  // 创建菜单参数
  createMenu(params: ICreateMenuParams) {
    return request.post('/menu/create', params);
  },
  // 更新菜单参数
  updateMenu(params: IUpdateMenuParams) {
    return request.post('/menu/edit', params);
  },
  // 菜单list
  getMenuList(params?: ISearchParams) {
    return request.get<IMenu[]>('/menu/list', params);
  },
  // 删除菜单
  deleteMenu(params: { _id: string }) {
    return request.post('/menu/delete', params);
  },
}
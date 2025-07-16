import api from "@/api/role";
import type { IRole, IRoleSearchParams } from "@/types/api";
import { formatDateToChinese } from "@/utils";
import {
  Button,
  Table,
  Space,
  Form,
  Input,
  Modal,
  message,
  type TableColumnsType,
} from "antd";
import { useRef, useState } from "react";
import { useAntdTable } from "ahooks";
import CreateRole from "./CreateRole";
import SetPremission from "./SetPremission";

interface ActionButtonsProps {
  record: any;
  onCreate: (id: string) => void;
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
}
const ActionButtons: React.FC<ActionButtonsProps> = ({
  record,
  onCreate,
  onEdit,
  onDelete,
}) => {
  return (
    <Space>
      <Button type="primary" onClick={() => onCreate(record._id)}>
        新增
      </Button>
      <Button type="primary" onClick={() => onEdit(record)}>
        编辑
      </Button>
      <Button danger onClick={() => onDelete(record._id)}>
        删除
      </Button>
    </Space>
  );
};

const Role = () => {
  const [form] = Form.useForm();
  const roleRef = useRef<{
    openModal: (type: string, data?: IRole | { parentId: string }) => void;
  }>(null);

  const preRef = useRef<{
    openModal: (type: string, data?: IRole) => void;
  }>(null);

  const getRoleData = (
    { current, pageSize }: { current: number; pageSize: number },
    formData: IRoleSearchParams
  ) => {
    return api
      .getRoleList({ ...formData, pageNum: current, pageSize: pageSize })
      .then((data) => {
        console.log("getRoleData", data);
        return {
          list: data.list,
          total: data.page.total,
        };
      });
  };

  const { tableProps, search } = useAntdTable(getRoleData, {
    form, // 绑定 Ant Design Form
    defaultPageSize: 5,
  });

  const handleCreate = () => {
    roleRef.current?.openModal("create");
  };

  const handleEdit = (record: IRole) => {
    roleRef.current?.openModal("edit", record);
  };

  const handleDel = (id: string) => {
    Modal.confirm({
      title: "删除角色",
      content: "确定删除该角色吗？",
      okText: "确定",
      cancelText: "取消",
      async onOk() {
        await api.deleteRole({ _id: id });
        message.success("删除成功");
        search.submit();
      },
    });
  };

  const handleSetPermission = (recordd: IRole) => {
    preRef.current?.openModal("setPermission", recordd);
  };

  const columns: TableColumnsType<IRole> = [
    { title: "角色名称", dataIndex: "roleName", key: "roleName" },
    { title: "备注", dataIndex: "remark", key: "remark" },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      render: (text) => {
        return formatDateToChinese(text);
      },
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
      key: "updateTime",
      render: (text) => {
        return formatDateToChinese(text);
      },
    },
    {
      title: "操作",
      key: "action",
      width: "200",
      render: (_, record) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                handleEdit(record);
              }}
            >
              编辑
            </Button>
            <Button
              type="primary"
              onClick={() => {
                handleSetPermission(record);
              }}
            >
              设置权限
            </Button>
            <Button
              danger
              onClick={() => {
                handleDel(record._id);
              }}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Form className="search-form" layout="inline" form={form}>
        <Form.Item name="deptName" label="角色名称">
          <Input placeholder="请输入角色名称" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="mr10" onClick={search.submit}>
            查询
          </Button>
          <Button type="primary" htmlType="submit" onClick={search.reset}>
            重置
          </Button>
        </Form.Item>
      </Form>
      <div className="wrap-table">
        <div className="header">
          <div className="title">部门列表</div>
          <div className="action">
            <Button onClick={handleCreate}>新增</Button>
          </div>
        </div>
        <Table bordered rowKey="_id" columns={columns} {...tableProps} />
      </div>
      {/* 创建角色组件 */}
      <CreateRole mref={roleRef} update={search.submit} />
      {/* 设置权限组件 */}
      <SetPremission mref={preRef} update={search.submit} />
    </>
  );
};
export default Role;

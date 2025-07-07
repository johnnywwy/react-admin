import { Breadcrumb } from "antd";

export default function NavBreadcrumb() {
  return (
    <Breadcrumb
      style={{ margin: "16px" }}
      items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
    />
  );
}

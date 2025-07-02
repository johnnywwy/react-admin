import storage from "@/utils/storage";
import { Button } from "antd";
function Welcome() {
  const handleStorage = (type: number) => {
    switch (type) {
      case 1:
        storage.set("age", 30);
        storage.set("user", { name: "Lucy", gender: "1" });
        break;
      case 2:
        console.log(storage.get("age"));
        console.log(storage.get("user"));
        break;
      case 3:
        console.log(storage.remove("age"));
        break;
      case 4:
        storage.clear();
        break;
    }
  };
  return (
    <div className="welcome">
      <p>Welcome</p>
      <Button onClick={() => handleStorage(1)}>写入值</Button>
      <Button onClick={() => handleStorage(2)}>读取值</Button>
      <Button onClick={() => handleStorage(3)}>删除值</Button>
      <Button onClick={() => handleStorage(4)}>清空所有</Button>
    </div>
  );
}

export default Welcome;

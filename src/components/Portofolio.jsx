import Card from "./Card";
import { useState } from "react";
import dataPorto from "../utils/portofolio";
import Button from "./Button";

export default function Portofolio() {
  const [data, setData] = useState(dataPorto.slice(0, 3));
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    const newData = dataPorto.slice(data.length, data.length + 3);
    setData([...data, ...newData]);
    if (data.length + newData.length === dataPorto.length) {
      setLoadMore(false);
    }
    setLoading(false);
  };
  return (
    <section
      id="portofolio"
      className="pt-10 md:pt-[100px] bg-[#FCFCFC] mb-3"
      data-aos="fade-up"
    >
      <h1 className="text-center text-2xl font-semibold md:text-4xl">
        Projects
      </h1>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item) => (
          <Card key={item.id} imageUrl={item.imageUrl} {...item} />
        ))}
      </div>
      <div className="mx-auto  w-4/5 mt-5 flex items-center justify-center">
        <div>
          {loadMore && <Button loading={loading} onClick={handleLoadMore} />}
        </div>
      </div>
    </section>
  );
}

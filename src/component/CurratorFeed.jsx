import { useEffect } from "react";

const CuratorFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src = "https://cdn.curator.io/published/7aa17ab6-02fc-4e7a-a77c-74800f348764.js";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-accent text-dark font-sans p-8 py-16" id="post">
      <div className="text-4xl font-bold mb-4 text-center py-20">Community Posts</div>
      <div id="curator-feed-plcommunity-layout">
        <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">
          Powered by Curator.io
        </a>
      </div>
    </section>
  );
};

export default CuratorFeed;

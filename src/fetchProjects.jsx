import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";
const client = createClient({
  space: "qcq7it008v72",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);
  const fetchProject = async () => {
    try {
      const response = await client.getEntries({
        content_type: "tailwindPortfolio",
      });
      //   console.log(response);
      const projects = response.items.map((item) => {
        const { id } = item.sys;
        const { desc, github, title, url, image } = item.fields;
        const img = image?.fields?.file?.url;
        return { id, desc, github, title, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return { loading, projects };
};

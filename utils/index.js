export const basicBlogLinks = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/blog/",
    text: "Blog",
  },
  {
    to: "/Oap",
    text: "Oap"
  }
];

export const formatTime = (time) => new Date(time).toLocaleString();
export const setSeo = (title, description) => {
  document.title = title;
};

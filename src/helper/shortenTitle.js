export const shortenTitle = (title) => {
  const newtitle = title.split(" ");
  return `${newtitle[0]} ${newtitle[1]} ${newtitle[2]} ${newtitle[3]}`;
};

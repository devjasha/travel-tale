const page = ({ params }: { params: { postId: number } }) => {
  return <div>Post: {params.postId}</div>;
};

export default page;

const page = ({ params }: { params: { postId: number } }) => {
  return <div>Post Id: {params.postId}</div>;
};

export default page;

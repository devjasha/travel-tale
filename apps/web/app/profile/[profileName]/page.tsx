const page = ({ params }: { params: { profileName: string } }) => {
  return <div>This is the profile page, of: {params.profileName}</div>;
};

export default page;

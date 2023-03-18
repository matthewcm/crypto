import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading || !user) {
    return <div data-testid="profile">Loading ...</div>;
  }

  const { name, picture } = user;

  return (
    <div
      data-testid="profile"
      className="flex flex-row m-auto text-center items-center justify-center"
    >
      <img className="max-h-10 mr-2" src={picture} alt={name} />
      <span className="text-center">{name}</span>
    </div>
  );
};

export default Profile;

interface UserParams {
  name: string;
  age: number;
}

interface UpdateUserParams {
  params: {
    id: number;
  };
  body: UserParams;
}

interface DeleteUSerParams {
  id: number;
}

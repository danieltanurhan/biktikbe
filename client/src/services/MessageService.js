import http from "../httpCommon";

const getAll = () => {
  return http.get("/messages");
};

const get = id => {
  return http.get(`/messages/${id}`);
};

const create = data => {
  return http.post('/messages', data);
};

const update = (id, data) => {
  return http.put('/messages/${id}', data);
};

const remove = id => {
  return http.delete('/messages/${id');
};

const findByUserText = user_text => {
  return http.get('/messages?user_text=${title}');
};

const MessageService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByUserText
};

export default MessageService;

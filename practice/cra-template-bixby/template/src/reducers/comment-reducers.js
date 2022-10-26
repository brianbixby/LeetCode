// let validateComment = comment => {
//   if (!comment.content) {
//     throw new Error('VALIDATION ERROR: comment requires CONTENT.');
//   }
// };

let comment = (state = [], action) => {
  let { type, payload } = action;

  switch (type) {
    case 'COMMENT_FETCH':
      return [payload];
    case 'COMMENTS_FETCH':
      return payload;
    case 'COMMENT_CREATE':
    //   validateComment(payload);
      return [payload, ...state];
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};

export default comment;

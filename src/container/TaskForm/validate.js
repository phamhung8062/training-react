const validate = (values) => {
  const errors = {};
  const { title, description } = values;
  if (!title) {
    errors.title = 'Tiêu Đề Không Được Bỏ Trống';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'Tiêu Đề Phải Từ 5 Ký Tự Trở Lên';
  }
  if (!description) {
    errors.description = 'Mô Tả Không Được Bỏ Trống';
  } else if (description.trim() && description.length < 5) {
    errors.description = 'Mô Tả Phải Từ 5 Ký Tự Trở Lên';
  }
  return errors;
};
export default validate;

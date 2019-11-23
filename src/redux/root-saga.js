import { all, call } from 'redux-saga/effects';

// import { shopSagas } from './shop/shop.sagas';
// import { userSagas } from './user/user.sagas';
// import { cartSagas } from './cart/cart.sagas';
import { incrementSaga } from './apps/app.saga';

export default function* rootSaga() {
  // yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
  yield all([call(incrementSaga)]);
}

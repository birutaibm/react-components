import {returnOrEval as answer} from '../../lib'

export default function If({ Condition=false, Then=null, Else=null }) {
  return answer(Condition) ? answer(Then) : answer(Else);
}
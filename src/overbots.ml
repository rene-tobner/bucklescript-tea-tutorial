open Tea
open Overbots_types

let init () =
  let model = {
    notUsedYet = 42;
  } in
  (model, Cmd.none)

let update model = function
  | NothingYet -> (model, Cmd.none)

let subscriptions _model =
  Sub.none

let main =
  App.standardProgram {
    init = init;
    update = update;
    view = Overbots_view.view;
    subscriptions = subscriptions;
  }

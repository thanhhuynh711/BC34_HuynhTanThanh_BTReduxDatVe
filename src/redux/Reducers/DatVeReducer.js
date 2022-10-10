const stateDefault = {
  danhSachGheDangDat: [],
  inputValue: 0,
};

export const DatVeReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DAT_GHE": {
      let dsGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = dsGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe == payload.soGhe
      );

      if (index != -1) {
        dsGheDangDatUpdate.splice(index, 1);
      } else {
        dsGheDangDatUpdate.push(payload);
      }

      return { ...state, danhSachGheDangDat: dsGheDangDatUpdate };
    }

    default:
      return { ...state };
  }
};

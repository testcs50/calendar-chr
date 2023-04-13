/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "calendar",
  initialState: {
    gapsInHistory: {
      1: {
        dates: [2000, 2006],
        name: "Наука",
        events: [
          {
            year: 2000,
            info: "Летом 2000 г. главой Временной администрации ЧР был назначен Ахмат-Хаджи Кадыров. Начался трудный процесс возрождения Чеченской Республики.",
          },
          {
            year: 2001,
            info: "Благодаря дальновидной политике руководатсва и содействию Федеральным властям, регион начал развиваться семимильными шагами",
          },
          {
            year: 2003,
            info: "23 марта 2003 г. в Чеченской Республике был проведен референдум, на котором население подавляющим большинством голосов высказалось за нахождение Чеченской Республики в составе России. Была принята Конституция ЧР, утверждены законы о выборах Президента и Правительства ЧР. Осенью 2003 г. первым Президентом Чеченской Республики был избран Ахмат-хаджи Кадыров",
          },
          {
            year: 2004,
            info: "Скорбная дата для Чеченского народа",
          },
        ],
      },
      2: {
        dates: [2007, 2015],
        events: [
          {
            year: 2007,
            info: "5 апреля 2007 г. Президентом Чеченской Республики был утвержден Рамзан Ахматович Кадыров",
          },
          {
            year: 2008,
            info: "Под непосредственным руководством Кадырова Рамзана Ахматовича в Чеченской Республике в очень короткие сроки произошли разительные перемены. Восстановлена политическая стабильность. Полностью  восстановлены города Грозный, Гудермес и Аргун. Широкие строительные работы ведутся в районах республики. Полноценно заработали системы здравоохранения и образования. В истории Чеченской Республики началась новая страница.",
          },
        ],
      },
    },
  },
  reducers: {
    getGaps(state: any, action: any) {},
  },
});

export default toolkitSlice.reducer;
export const { getGaps } = toolkitSlice.actions;

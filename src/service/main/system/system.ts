import { IDataType } from "@/service/type";
import skRequest from "../../";
import { IPageResult } from "./type";

export function getPageListData(url: string, queryInfo: any) {
  return skRequest.post<IDataType<IPageResult>>({
    url: url,
    data: queryInfo
  });
}

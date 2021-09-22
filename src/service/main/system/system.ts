import { IDataType } from "@/service/type";
import skRequest from "../../";
import { IPageResult } from "./type";

export function getPageListData(url: string, queryInfo: any) {
  return skRequest.post<IDataType<IPageResult>>({
    url: url,
    data: queryInfo
  });
}

// url: /users/id
export function deletePageData(url: string) {
  return skRequest.delete<IDataType>({
    url: url
  });
}

export function createPageData(url: string, newData: any) {
  return skRequest.post<IDataType>({
    url: url,
    data: newData
  });
}

export function editPageData(url: string, editData: any) {
  return skRequest.patch<IDataType>({
    url: url,
    data: editData
  });
}

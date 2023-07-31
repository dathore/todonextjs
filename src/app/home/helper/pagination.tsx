export const paginate = (data: any, pageNumber: any, pageSize: any) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return data?.items?.todos.slice(startIndex, startIndex + pageSize); // 0, 9
  };

export type Language = {
    name: string;
    description?: string;
}
export const languages: Language[] = [
    {
        name: 'Tiếng Việt',
        description: 'Ngôn ngữ mẹ đẻ, sử dụng thành thạo trong giao tiếp hàng ngày và công việc.'
    },
    {
        name: 'Tiếng Anh',
        description: 'Có khả năng giao tiếp cơ bản, đọc hiểu tài liệu kỹ thuật và tham gia các cuộc họp quốc tế.'
    },
    {
        name: 'Tiếng Nhật',
        description: 'Đang trong quá trình học tập, có thể giao tiếp cơ bản và hiểu một số thuật ngữ chuyên ngành.'
    }
];


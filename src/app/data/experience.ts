export type Experience = {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
}
export const experience: Experience[] = [
    {
        id: '1',
        company: 'Công ty TNHH Công nghệ và Truyền thông VTC',
        position: 'Thực tập sinh lập trình viên',
        startDate: '2023-06',
        endDate: '2023-09',
        description: [
            'Tham gia phát triển ứng dụng web sử dụng ReactJS và NodeJS.',
            'Hỗ trợ trong việc bảo trì và nâng cấp hệ thống hiện tại.',
            'Học hỏi và áp dụng các công nghệ mới trong quá trình phát triển.'
        ]
    },
    {
        id: '2',
        company: 'Công ty TNHH Công nghệ ABC',
        position: 'Lập trình viên Frontend',
        startDate: '2023-10',
        endDate: '2024-04',
        description: [
            'Phát triển giao diện người dùng cho ứng dụng web sử dụng ReactJS.',
            'Tối ưu hóa hiệu suất và trải nghiệm người dùng.',
            'Hợp tác với nhóm thiết kế để đảm bảo tính nhất quán trong giao diện.'
        ]
    }
];
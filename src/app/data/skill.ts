export type Skill = {
    name: string;
    description?: string;
}
export const softSkills: Skill[] = [
    {
        name: 'Giao tiếp',
        description: 'Khả năng giao tiếp hiệu quả'
    },
    {
        name: 'Làm việc nhóm',
        description: 'Khả năng làm việc hiệu quả'
    },
    {
        name: 'Giải quyết vấn đề',
        description: 'Khả năng phân tích v'
    },
    {
        name: 'Quản lý thời gian',
        description: 'Khả năng sắp xếp và ưu tiên công việc để hoàn thành đúng hạn.'
    }
]
export const technicalSkills: Skill[] = [
    {
        name: 'JavaScript',
        description: 'Ngôn ngữ lập .'
    },
    {
        name: 'ReactJS',
        description: 'Thư viện JavaScript .'
    },
    {
        name: 'NodeJS',
        description: 'Môi trường chạy'
    },
    {
        name: 'MongoDB',
        description: 'Cơ sở dữ liệu NoSQL phổ biếni.'
    }
]

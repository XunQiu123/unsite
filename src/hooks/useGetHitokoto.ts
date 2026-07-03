import axios from 'axios';
import { ref } from 'vue';

const useGetHitokoto = () => {
    const hitokoto = ref<string>('正在获取一言...');
    const from = ref<string>('正在获取来源...');

    const fetchData = async () => {
        try {
            const res = await axios.get("https://v1.hitokoto.cn/", {
                timeout: 5000
            });
            hitokoto.value = res.data.hitokoto.replace(/[。.]$/g, '');
            from.value = res.data.from || '未知';
        } catch (error: any) {
            console.error('一言获取失败:', error.message || error);
            hitokoto.value = '生活明朗，万物可爱';
            from.value = 'DouBao';
        }
    };

    fetchData();

    return { hitokoto, from, fetchData };
};

export default useGetHitokoto;

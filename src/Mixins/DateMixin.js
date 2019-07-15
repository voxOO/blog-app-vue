
import moment from 'moment'

export const DateMixin = {
    methods: {
        dateFormat(date) {
            //console.log(date)
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        },

        diffForHumans(date) {
            return moment(date).fromNow()
        }
    },
}
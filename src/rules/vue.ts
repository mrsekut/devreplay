module.exports = [
    {
      condition: [
        '<template slot'
      ],
      consequent: [
        '<template v-slot'
      ]
    },
    {
      condition: [
        '<template slot-scope'
      ],
      consequent: [
        '<template v-slot:item="slotProps"'
      ]
    },
    {
      condition: [
        '<template slot="${1:item}" slot-scope="{${2:item2}}">'
      ],
      consequent: [
        '<template v-slot:${1:item}="{${2:item2}}">'
      ]
    }
  ]
---
title: elementui组件的小技巧
date: 2022-3-30
sidebar: 'auto'
tags:
 - 框架
categories: 
 - theFramework
---

## 表格跨页多选
```js
 <el-table
      ref="multipleTable"
      :data="reportList"
      @selection-change="handleSelectionChange"
      row-key="bridgecode"
    >
 <el-table-column
        type="selection"
        :reserve-selection="true"
      ></el-table-column>
```

## 表格简易封装
```js
<script lang="jsx">
export default {
  name: 'Table',
  inheritAttrs: false,
  props: {
    data: {
      type: Array,
      default: () => []
    },
    tableHeader: {
      type: Array,
      default: () => []
    },
    wrapperClass: {
      type: [String],
      default: ''
    }
  },
  render() {
    return (
      <el-table
        data={this.data}
        {...{ attrs: this.$attrs }}
        {...{ on: { ...this.$listeners }}}
        class={this.wrapperClass}
        {...{
          scopedSlots: {
            empty: () => {
              if (this.$scopedSlots['empty']) {
                return this.$scopedSlots['empty']()
              }
              return '空数据'
            }
          }
        }}>
        {this.tableHeader.map((item) => {
          return (
            <el-table-column
              prop={item.prop}
              {...{ attrs: item.config }}
              label={item.label}
              {...{
                scopedSlots: {
                  header: (scope) => {
                    if (this.$scopedSlots[item.prop + 'head']) {
                      return this.$scopedSlots[item.prop + 'head'](scope)
                    }
                    return item.label
                  },
                  default: (scope) => {
                    if (this.$scopedSlots[item.prop]) {
                      return this.$scopedSlots[item.prop](scope)
                    }
                    return item.emptyText && !scope.row[item.prop] ? item.emptyText : scope.row[item.prop]
                  }
                }
              }}></el-table-column>
          )
        })}
      </el-table>
    )
  }
}
</script>
<style scoped lang="scss">
::v-deep .el-table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
```
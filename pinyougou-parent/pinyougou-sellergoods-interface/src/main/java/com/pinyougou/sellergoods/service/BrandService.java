package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

/**
 * 品牌接口
 * @author xiong
 *
 */
public interface BrandService {

	/**
	 * 查询所有品牌
	 * @return
	 */
	public List<TbBrand> findAll();

	/**
	 * 品牌分页
	 * @param pageNum  当前页
	 * @param pageSize   每页记录数
	 * @return
	 */
	public PageResult findPage(int pageNum,int pageSize);

	/**
	 * 增加品牌
	 * @param brand
	 */
	public void add(TbBrand brand);

	/**
	 * 根据id查询实体
	 * @param id
	 * @return
	 */
	public TbBrand findOne(Long id);

	/**
	 * 修改方法
	 * @param brand
	 */
	public void update(TbBrand brand);

	/**
	 * 删除
	 * @param ids
	 */
	public void delete(Long[] ids);

	/**
	 * 条件查询
	 * @param brand
	 * @param pageNum
	 * @param pageSize
	 * @return
	 */
	public PageResult findPage(TbBrand brand,int pageNum,int pageSize);

	/**
	 * 返回下拉列表数据
	 * @return
	 */
	public List<Map> selectOptionList();
}
